import {expect, test} from '@playwright/test';
import {ApiClient} from "../lib/api/api.client";
import {OrderResponse} from "../lib/model/order.response.model";
import {SimsListResponse} from "../lib/model/sims.list.response";

test.describe.configure({ mode: 'serial' });

let orderedESimIds: number[];
let apiClient: ApiClient;

test.beforeAll(async({request}) => {
  apiClient = await ApiClient.init(request);
});

test('POST an order for 6 "merhaba-7days-1gb" eSIMs', async () => {

  const formData: { [key: string]: string } = {};
  formData["quantity"] = "6";
  formData["package_id"] = "merhaba-7days-1gb";

  const orderResponse = await apiClient.request.post("v2/orders", {data: formData});

  expect(orderResponse.status()).toBe(200);

  const orderResponseData = await orderResponse.json() as OrderResponse;

  expect.soft(orderResponseData.data.package).toContain("Merhaba");
  expect.soft(orderResponseData.data.data).toContain("1 GB");
  expect.soft(orderResponseData.data.package_id).toContain("merhaba-7days-1gb");
  expect.soft(orderResponseData.data.quantity).toBe(6);
  expect.soft(orderResponseData.data.sims.length).toBe(6);

  orderedESimIds = orderResponseData.data.sims.map(eSim => eSim.id);
});

test('GET a list of eSIMs and validate that the created esims are in the list', async () => {

  const simsListResponse = await apiClient.request.get("v2/sims?include=order,order.status&limit=50");

  expect(simsListResponse.status()).toBe(200);

  const simsList = await simsListResponse.json() as SimsListResponse;
  const simsListIds = simsList.data.filter(sim => sim.simable.package_id === "merhaba-7days-1gb").map(sim => sim.id);

  expect(simsListIds).toEqual(expect.arrayContaining(orderedESimIds));
});

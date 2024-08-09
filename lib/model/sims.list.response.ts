export interface SimsListResponse {
    data: Daum[]
    links: Links
    meta: Meta
}

export interface Daum {
    id: number
    created_at: string
    iccid: string
    lpa: string
    imsis: string | null
    matching_id: string
    confirmation_code: string | null
    qrcode: string
    qrcode_url: string
    direct_apple_installation_url: string
    voucher_code: string | null
    airalo_code: string | null
    apn_type: string
    apn_value: string
    is_roaming: boolean
    msisdn: string | null
    apn: Apn
    simable: Simable
}

export interface Apn {
    ios: Ios
    android: Android
}

export interface Ios {
    apn_type: string
    apn_value: string
}

export interface Android {
    apn_type: string
    apn_value: string
}

export interface Simable {
    id: number
    code: string
    package_id: string
    currency: string
    quantity: number
    type: string
    description?: string
    esim_type: string
    validity: string
    package: string
    data: string
    price: string
    created_at: string
    manual_installation: string
    qrcode_installation: string
    installation_guides: InstallationGuides
    text: string | null
    voice: string | null
    net_price: number
    status: Status
}

export interface InstallationGuides {
    en: string
}

export interface Status {
    name: string
    slug: string
}

export interface Links {
    first: string
    last: string
    prev: string | null
    next: string
}

export interface Meta {
    message: string
    current_page: number
    from: number
    last_page: number
    path: string
    per_page: string
    to: number
    total: number
}

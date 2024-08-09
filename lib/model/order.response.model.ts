export interface OrderResponse {
    data: Data
    meta: Meta
}

export interface Data {
    id: number
    code: string
    currency: string
    package_id: string
    quantity: number
    type: string
    description: string | null
    esim_type: string
    validity: number
    package: string
    data: string
    price: number
    created_at: string
    manual_installation: string
    qrcode_installation: string
    installation_guides: InstallationGuides
    text: string | null
    voice: string | null
    net_price: number
    sims: Sim[]
}

export interface InstallationGuides {
    en: string
}

export interface Sim {
    id: number
    created_at: string
    iccid: string
    lpa: string
    imsis: string | null
    matching_id: string
    qrcode: string
    qrcode_url: string
    airalo_code: string | null
    apn_type: string
    apn_value: string
    is_roaming: boolean
    confirmation_code: string | null
    apn: Apn
    msisdn: string | null
    direct_apple_installation_url: string
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

export interface Meta {
    message: string
}

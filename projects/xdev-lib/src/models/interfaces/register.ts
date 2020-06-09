import {ValidationState} from '../enums/validation-state';
import {BlockchainRole} from '../enums/blockchain-role';
import {Country} from './country';

export interface RegisterRequest {
    name: string;
    surname: string;
    email: string;
    country: Country;
    distributionPartner: string;
    password: string;
}

export interface RegisterResponse {
    validationState: ValidationState.REGISTERED;
    role: BlockchainRole.INVESTOR;
    email: string;
    name: string;
    surname: string;
    uid: string;
    country: string;
    phone: string;
    street: string;
    zipcode: string;
    city: string;
    companyStreet: string;
    companyZipcode: string;
    companyCity: string;
    companyCountry: string;
    companyName: string;
    siret: string;
    distributionPartner: string;
    legalRepresentative: string;
    lastPaymentReference: string;
    ethAddress: string;
    resetPasswordDate: number;
}

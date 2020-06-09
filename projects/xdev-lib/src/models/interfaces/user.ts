import {ValidationState} from '../enums/validation-state';
import {BlockchainRole} from '../enums/blockchain-role';
import {Role} from '../enums/role';

export interface User {
    validationState: ValidationState;
    role: Role;
    email: string;
    name: string;
    surname: string;
    uid: string;
    country: {
        code: string,
        name: string  
    };
    blockchainRole: BlockchainRole;
    distributionPartner: string;
    resetPasswordDate: number;
}

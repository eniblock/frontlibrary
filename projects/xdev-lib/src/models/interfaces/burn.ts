import {AssetType} from '../enums/asset-type';
import {OperationType} from '../enums/operation-type';

export interface BurnRequest {
    "assetType": AssetType,
    "operationType": OperationType,
    "price": number,
    "amount": number,
    "uid": string
}

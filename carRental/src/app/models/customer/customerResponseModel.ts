import { CustomerDto } from './customerDto';
import { ResponseModel } from '../responseModel';

export interface CustomerResponseModel extends ResponseModel {
  data: CustomerDto[];
}

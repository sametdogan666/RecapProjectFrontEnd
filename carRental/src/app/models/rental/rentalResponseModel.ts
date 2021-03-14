import { RentalDto } from './rentalDto';
import { ResponseModel } from '../responseModel';

export interface RentalResponseModel extends ResponseModel {
  data: RentalDto[];
}

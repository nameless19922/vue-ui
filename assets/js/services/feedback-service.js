import BaseService from './base-service';

export default class FeedbackService extends BaseService {
  constructor() {
    super('/api/send');
  }
}
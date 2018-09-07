import { TestBed, inject } from '@angular/core/testing';

import { TableActionsService } from './table-actions.service';

describe('TableActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableActionsService]
    });
  });

  it('should be created', inject([TableActionsService], (service: TableActionsService) => {
    expect(service).toBeTruthy();
  }));
});

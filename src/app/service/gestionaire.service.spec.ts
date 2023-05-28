import { TestBed } from '@angular/core/testing';

import { GestionaireService } from './gestionaire.service';

describe('GestionaireService', () => {
  let service: GestionaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

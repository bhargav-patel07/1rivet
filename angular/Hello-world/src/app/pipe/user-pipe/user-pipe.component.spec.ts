import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPipeComponent } from './user-pipe.component';

describe('UserPipeComponent', () => {
  let component: UserPipeComponent;
  let fixture: ComponentFixture<UserPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

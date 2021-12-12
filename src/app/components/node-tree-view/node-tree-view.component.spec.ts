import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeTreeViewComponent } from './node-tree-view.component';

describe('NodeTreeViewComponent', () => {
  let component: NodeTreeViewComponent;
  let fixture: ComponentFixture<NodeTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeTreeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

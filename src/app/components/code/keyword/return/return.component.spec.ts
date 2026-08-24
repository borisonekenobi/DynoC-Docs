import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReturnComponent} from './return.component';

describe('ReturnComponent', () => {
	let component: ReturnComponent;
	let fixture: ComponentFixture<ReturnComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ReturnComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ReturnComponent);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

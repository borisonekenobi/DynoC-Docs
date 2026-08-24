import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StringKWComponent} from './string.component';

describe('StringKWComponent', () => {
	let component: StringKWComponent;
	let fixture: ComponentFixture<StringKWComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [StringKWComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(StringKWComponent);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

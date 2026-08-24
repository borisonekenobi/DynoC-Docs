import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ForComponent} from './for.component';

describe('ForComponent', () => {
	let component: ForComponent;
	let fixture: ComponentFixture<ForComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ForComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ForComponent);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

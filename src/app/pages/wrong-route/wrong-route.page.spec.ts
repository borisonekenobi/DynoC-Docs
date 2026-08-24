import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WrongRoutePage} from './wrong-route.page';

describe('WrongRoutePage', () => {
	let component: WrongRoutePage;
	let fixture: ComponentFixture<WrongRoutePage>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [WrongRoutePage],
		}).compileComponents();

		fixture = TestBed.createComponent(WrongRoutePage);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

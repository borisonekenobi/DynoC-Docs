import {ComponentFixture, TestBed} from '@angular/core/testing';
import {OperatorsPage} from './operators.page';

describe('OperatorsPage', () => {
	let component: OperatorsPage;
	let fixture: ComponentFixture<OperatorsPage>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [OperatorsPage],
		}).compileComponents();

		fixture = TestBed.createComponent(OperatorsPage);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

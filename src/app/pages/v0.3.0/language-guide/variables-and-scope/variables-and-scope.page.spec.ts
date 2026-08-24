import {ComponentFixture, TestBed} from '@angular/core/testing';
import {VariablesAndScopePage} from './variables-and-scope.page';

describe('VariablesAndScopePage', () => {
	let component: VariablesAndScopePage;
	let fixture: ComponentFixture<VariablesAndScopePage>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [VariablesAndScopePage],
		}).compileComponents();

		fixture = TestBed.createComponent(VariablesAndScopePage);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

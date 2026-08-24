import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ExamplesPage} from './examples.page';

describe('ExamplesPage', () => {
	let component: ExamplesPage;
	let fixture: ComponentFixture<ExamplesPage>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ExamplesPage],
		}).compileComponents();

		fixture = TestBed.createComponent(ExamplesPage);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GettingStartedPage} from './getting-started.page';

describe('GettingStartedPage', () => {
	let component: GettingStartedPage;
	let fixture: ComponentFixture<GettingStartedPage>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [GettingStartedPage],
		}).compileComponents();

		fixture = TestBed.createComponent(GettingStartedPage);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

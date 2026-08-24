import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StdlibPage} from './stdlib.page';

describe('StdlibPage', () => {
	let component: StdlibPage;
	let fixture: ComponentFixture<StdlibPage>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [StdlibPage],
		}).compileComponents();

		fixture = TestBed.createComponent(StdlibPage);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

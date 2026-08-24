import {ComponentFixture, TestBed} from '@angular/core/testing';
import {V0_3_0Page} from './v0_3_0.page';

describe('V0_3_0Page', () => {
	let component: V0_3_0Page;
	let fixture: ComponentFixture<V0_3_0Page>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [V0_3_0Page],
		}).compileComponents();

		fixture = TestBed.createComponent(V0_3_0Page);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

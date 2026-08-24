import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WhileComponent} from './while.component';

describe('WhileComponent', () => {
	let component: WhileComponent;
	let fixture: ComponentFixture<WhileComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [WhileComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(WhileComponent);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

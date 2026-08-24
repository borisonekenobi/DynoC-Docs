import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DocumentationPage} from './documentation.page';

describe('DocumentationPage', () => {
	let component: DocumentationPage;
	let fixture: ComponentFixture<DocumentationPage>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DocumentationPage],
		}).compileComponents();

		fixture = TestBed.createComponent(DocumentationPage);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

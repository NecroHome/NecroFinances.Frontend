import { Component, signal } from '@angular/core';
import { LoaderComponent } from './components/interceptos/loader.component';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    imports: [
        LoaderComponent,
        RouterOutlet,
        ToastModule
    ]
})
export class App {
    protected readonly title = signal('NecroFinances');
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarModule,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor(private route: Router) {}

  onCreateComite() {
    // Logique pour créer un comité
    console.log('Creating comité...');

    this.route.navigate(['/create']);
  }

  onViewComites() {
    // Logique pour afficher les comités
    console.log('Viewing comités...');

    this.route.navigate(['/comitedos']);
  }
}

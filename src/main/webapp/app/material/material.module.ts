import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatGridListModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [MatButtonModule, MatCardModule, MatListModule, MatIconModule, MatGridListModule, FormsModule, ReactiveFormsModule],
    declarations: []
})
export class MaterialModule {}

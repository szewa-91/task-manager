import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatPaginatorModule,
    MatTabsModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatListModule,
        MatIconModule,
        MatGridListModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatPaginatorModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatListModule,
        MatIconModule,
        MatGridListModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatPaginatorModule
    ],
    declarations: []
})
export class MaterialModule {}

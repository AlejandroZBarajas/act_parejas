
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransformationI } from '../../../characters-module/interfaces/charactersResponse-i';

@Component({
  selector: 'app-transform-card',
  templateUrl: './transform-card.component.html',
  styleUrls: ['./transform-card.component.css'],
})
export class TransformCardComponent implements OnInit {
  @Input() transformationData: TransformationI | undefined;
  @Output() saveControl = new EventEmitter<TransformationI>();

  showModal: boolean = false;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.transformationData?.id || 0],
      name: [this.transformationData?.name || '', [Validators.required]],
      ki: [this.transformationData?.ki || '', [Validators.required]],
      image: [this.transformationData?.image || '', [Validators.required]],
    });

    this.form.get('id')?.disable();
    this.form.get('name')?.disable();
    this.form.get('image')?.disable();
  }

  toOpenModal(): void {
    this.showModal = true;

    this.form.patchValue({
      id: this.transformationData?.id,
      name: this.transformationData?.name,
      ki: this.transformationData?.ki,
      image: this.transformationData?.image,
    });
  }

  toCloseModal(): void {
    this.showModal = false;
  }

  toSave(): void {
    if (this.form.valid) {
      const updatedTransformation: TransformationI = {
        id: this.transformationData?.id || 0,
        name: this.transformationData?.name || '',
        ki: this.form.get('ki')?.value,
        image: this.transformationData?.image || '',
        deletedAt: this.transformationData?.deletedAt || null,
      };
      this.saveControl.emit(updatedTransformation);
      this.toCloseModal();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
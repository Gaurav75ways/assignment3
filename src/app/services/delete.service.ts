import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from 'src/app/components/dialog/dialog.component'

@Injectable({
  providedIn: 'root',
})
export class DeleteService {
  constructor(private dialog: MatDialog) {}

  openConfirmDialog() {
    return this.dialog.open(DialogComponent, {})
  }
}

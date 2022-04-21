import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { User } from 'src/app/models/user'
import { UserTableService } from 'src/app/services/user-table.service'
import { DeleteService } from 'src/app/services/delete.service'

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  data: User
  columnsToDisplay: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
  ] = [
    'firstName',
    'lastName',
    'email',
    'gender',
    'college',
    'dob',
    'website',
    'strength_A',
    'strength_B',
    'remove',
  ]
  dataSource: MatTableDataSource<any[]> = new MatTableDataSource<any[]>([])

  @ViewChild(MatPaginator)
  paginator: MatPaginator
  @ViewChild(MatSort)
  sort: MatSort

  constructor(
    private userData: UserTableService,
    private dialogService: DeleteService,
  ) {}
  public dataArray: any[] = []
  ngOnInit() {
    this.dataArray = this.userData.getData()
  }

  deleteUser(item_email: string) {
    this.dialogService
      .openConfirmDialog()
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          for (let i = 0; i < this.dataArray.length; i++) {
            if (this.dataArray[i].email == item_email) {
              this.dataArray.splice(i, 1)
              localStorage.removeItem('users')
              localStorage.setItem('Users', JSON.stringify(this.dataArray))
              this.ngOnInit()
            }
          }
        }
      })
  }
}

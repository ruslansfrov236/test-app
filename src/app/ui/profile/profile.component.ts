import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../../service/workers.service';
import { User } from '../../entities/users/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone:false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: User | undefined;

  constructor(
    private workersService: WorkersService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.data = await this.getById();
    } catch (error) {
      console.error('Error fetching profile data', error);
    }
  }

 async getById(): Promise<User> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      return await this.workersService.getById(id);
    } else {
      throw new Error('User ID is missing');
    }
  }
}

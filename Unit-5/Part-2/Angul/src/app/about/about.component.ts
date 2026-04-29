import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMember, DataRepository, LogAction } from './about.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements OnInit {
  // Instantiate the Generic Repository strictly for TeamMembers
  teamRepo: DataRepository<TeamMember>;
  members: TeamMember[] = [];

  constructor() {
    // Initialize our generic class with some seed data
    this.teamRepo = new DataRepository<TeamMember>([
      { id: 1, name: 'Alice Johnson', role: 'Lead Developer', expertise: 'Angular & TypeScript' },
      { id: 2, name: 'Bob Smith', role: 'UI/UX Designer', expertise: 'Figma & CSS' }
    ]);
  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.members = this.teamRepo.getAll();
  }

  // Apply our custom decorator to log this action to the browser console
  @LogAction('User clicked the Add Member button')
  addNewMember() {
    const newMember: TeamMember = {
      id: Date.now(),
      name: 'New Hire ' + Math.floor(Math.random() * 100),
      role: 'Junior Dev',
      expertise: 'Learning Fast'
    };
    
    this.teamRepo.add(newMember);
    this.refreshData();
  }

  // Apply the decorator here as well
  @LogAction('User removed a team member')
  removeMember(id: number) {
    this.teamRepo.remove(id);
    this.refreshData();
  }
}
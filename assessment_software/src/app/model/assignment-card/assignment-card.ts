export class AssignmentCard {
  public id: string;
  public title: string;
  public submissions: string;
  public deadline: Date;
  public testcases: string;
  public share: string;
  public edit: string;

  constructor(
    id: string,
    title: string,
    submissions: string,
    deadline: Date,
    testcases: string,
    share: string,
    edit: string
  ) {
    this.id = id;
    this.title = title;
    this.submissions = submissions;
    this.deadline = deadline;
    this.testcases = testcases;
    this.share = share;
    this.edit = edit;
  }
}

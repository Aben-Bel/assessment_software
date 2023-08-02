export class CourseCard {
   
    public courseName:string;
    public year:Number;
    public semester:Number;
    public assignments:Number;
    public submissions:Number;

    constructor (courseName:string, year:Number, semester:Number, assignments:Number, submissions:Number){
        this.courseName=courseName;
        this.year=year;
        this.semester=semester;
        this.assignments=assignments;
        this.submissions=submissions;
    }
    getSemesterYear(){
        return String(this.year) + '/' + this.semester;
    }
}

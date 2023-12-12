var author = "Alessandro Colla";

class Courses{
    constructor(){
        this.courses = [];
    }
    createCourse(title, description, srcImage, categories){
        const id = this.courses.length + 1;
        const course = {id, srcImage, title, description, author, categories};
        this.courses.push(course);
    }

    editCourse(id, title, description, author, srcImage, categories){
        const toEdit = this.courses.find(courseToEdit => courseToEdit.id === id);
        if (toEdit){
            toEdit.title = title;
            toEdit.description = description;
            toEdit.srcImage = srcImage;
            toEdit.categories = categories;
            toEdit.author = author;
        }
        else{
            console.log("Corso non trovato");
        }
    }

    deleteCourse(id){
        const toDelete = this.courses.findIndex(courseToDelete => courseToDelete.id === id);
        if(toDelete != -1){
            this.courses.splice(toDelete, 1)
        }
    }

    detailCourse(id){
        const details = this.courses.find(course => course.id === id);
        if(details){
            console.log("detailCourse: " + details.id + ", " + details.title + ", " + details.description + ", " + details.author +", "+ details.srcImage +", "+ details.categories);
            return {
                title: details.title, 
                description: details.description, 
                author: details.author, 
                srcImage: details.srcImage,
                categories: details.categories
            }
        }

        else{
            console.log("Corso non trovato.");
        }
    }

    getCoursesByCategory(category){
        const coursesInCategory = this.courses.filter(course =>
            course.categories && course.categories.includes(category)
        );

        coursesInCategory.forEach(course => {
            this.detailCourse(course.id);
        });

        console.log(coursesInCategory);
        return coursesInCategory;
    }

    getCategories(){
        let categoriesList = new Set();

        this.courses.forEach(course =>{
            if(course.categories){
                course.categories.forEach(category =>{
                    categoriesList.add(category);
                });
            }
        });
        console.log(categoriesList);
        return Array.from(categoriesList);
    }
}


var corsi = new Courses();
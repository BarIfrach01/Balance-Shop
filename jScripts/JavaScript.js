var producstSection = false; // משתנה גלובאלי לבדיקה האם נבחר מוצר
var sizeSection = ""; // משתנה גלובאלי לבדיקה האם נבחרה מידה
var shirtColorSection = ""; // משתנה גלובאלי לבדיקה האם נבחר צבע חולצה
var nameSection = ""; // משתנה גלובאלי לבדיקה האם הוזן שם

// פונקציה לשינוי שקיפות תמונות של המידה שנבחרה
function changeSizePicOpacity(size) {
    sizeSection = true; // מסמן שנבחרה מידה

    var images = document.getElementsByClassName("size_img"); // יצירת מערך של כל התמונות של המידות

    for (var i = 0; i < images.length; i++) {  // לולאה שמשנה את שקיפות כל התמונות ל-0.2
        images[i].style.opacity = '0.2';
    }
    document.getElementById('img_' + size).style.opacity = '1'; // שינוי השקיפות של התמונה הנבחרת ל-1

    setButtonDisalbed(); // קורא לפונקציה הבודקת האם להפוך את הכפתור לזמין
}

// פונקציה לשינוי שקיפות תמונות צבעי החולצות כאשר נבחר צבע
function shirtColor(color) {
    shirtColorSection = true; // מסמן שנבחרה חולצה

    var images = document.getElementsByClassName("shirt_img"); // יצירת מערך של כל התמונות של החולצות

    for (var i = 0; i < images.length; i++) {  // לולאה שמשנה את שקיפות כל התמונות ל-0
        images[i].style.opacity = '0';
    }
    document.getElementById(color + "_shirt").style.opacity = '1'; // שינוי השקיפות של התמונה הנבחרת ל-1

    setButtonDisalbed(); // קורא לפונקציה הבודקת האם להפוך את הכפתור לזמין
}

// פונקציה לשינוי שקיפות תמונות המוצרים כאשר נבחר מוצר
function productsOpacity() {
    var checkboxes = document.getElementsByClassName("productsCheckbox"); // יצירת מערך של כל התמונות של המוצרים
    producstSection = false; // הגדרה ראשונית - לא נבחרו מוצרים

    for (var i = 0; i < checkboxes.length; i++) {
        var product = checkboxes[i].value; // משתנה המכיל את שם המוצר
        var image = document.getElementById('img_' + product); // משתנה המכיל את תמונת המוצר המתאימה בהתאם למוצר שנבחר

        if (checkboxes[i].checked) {
            image.style.opacity = '1'; // עבור המוצר נבחר, משנים את שקיפות התמונה ל-1
            producstSection = true; // מסמן שנבחר מוצר
        } else {
            image.style.opacity = '0.2'; // עבור כל המוצרים שלא נבחרו, משנים את שקיפות התמונה ל-0.2
        }
    }

    setButtonDisalbed(); // קורא לפונקציה הבודקת האם להפוך את הכפתור לזמין
}

// פונקציה לבדיקת שם מלא שהוזן
function onFullNameChange(fullName) {
    nameSection = fullName; // מעדכן את המשתנה לשם שהוזן

    setButtonDisalbed(); // קורא לפונקציה הבודקת האם להפוך את הכפתור לזמין
}

// פונקציה לבדיקת כל התנאים לפני הפיכת הכפתור לזמין
function setButtonDisalbed() {
    var disabled = !producstSection || !sizeSection || !shirtColorSection || !nameSection; // בודק אם כל המשתנים נבחרו/מולאו

    var button = document.getElementById("submitButton"); // שומר במשתנה את הכפתור

    if (!disabled) {
        button.removeAttribute("disabled"); //אם כל התנאים מתקיימים, הופך את הכפתור לזמין
        document.getElementById("submitButton").style.opacity = "1"; // משנה את שקיפות הכפתור ל-1
    } else {
        button.setAttribute("disabled", "disabled"); // אחרת, השאר את הכפתור כלא זמין
    }
}

// שליחת הודעת אלרט עם השם של המזמין
function alertMessege() {

    var fullName = document.getElementById("full_name").value; // שמירת השם שהוזן בתוך משתנה

    alert("שלום " + fullName + "\nההזמנה נשלחה בהצלחה!\nהמוצרים יחכו לך בסניף."); // הודעת אלרט
}

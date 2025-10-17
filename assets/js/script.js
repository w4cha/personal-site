
// list of variables to keep track of the content that needs to be change 
// whenever an user navigates through the gallery carousel
// we host our images on a different site to lower the space this
// project use due to the limitations imposed by the site where this
// is going to be uploaded as consecuence there migth be some lag
// when displaying the site for the first time

const images = ["assets\\img\\projects_img\\vehicle-detalle.png", "assets\\img\\projects_img\\reciclaje-detalle.png", "assets\\img\\projects_img\\cs50.png", "assets\\img\\projects_img\\churn-detalle.png", "assets\\img\\projects_img\\sudoku-detalle.png", "assets\\img\\projects_img\\labs-detalle.png"];
const panels = ["site_vehicle", "site_recicla", "site_finance", "site_churn", "site_solver", "site_labs"];
const related_content = ["vehiculo-g", "recicla-g", "finance-g", "churn-g", "sudoku-g", "laboratorio-g"];
var current = "#current";
var form_name = "";

function show_message() {
    let message_div = document.getElementById("message_alert");
    message_div.innerText = `Tu mensaje ha sido enviado exitosamente ${form_name} gracias por tus comentarios`;
    document.getElementById("contact-form").reset();
    document.getElementsByTagName("title")[0].innerText = "Gracias";
    message_div.style.display = "block";
    setTimeout(() => {
        message_div.style.display = "none";
    }, 4000);
}

// showModal is not supported by jquery, showModal is
// a function that can be called on dialog html elements,
// dialog is an element that streamlines the process of
// generating modals on css
function change_modal(op_value, target_element) {
    if (op_value === "open") {
        document.getElementById(target_element).showModal();

        // another edge case see comments below to understand what I'm talking about
        // for short if you have an input inside an element with display none you can't
        // have them with the attribute required the browser didn't liked that
        if (target_element === "modal-form") {
            document.getElementById("name").setAttribute("required", "");
            document.getElementById("message").setAttribute("required", "");
        }
    } else {
        document.getElementById(target_element).close();
    }
}

$(document).ready(function() {

    // here we have to access a var to get to the display because we are targeting an
    // :after speudoelement that can't be directly reach by jquery
    // function allows the display of a visual effect whenever a link in the navbar is clicked
    $(".nav-link").click(function() {
        if ($(this).css("--js-after-display") === "none") {
            $(this).css("--js-after-display", "display");
            setTimeout(() => {
                $(this).css("--js-after-display", "none");
            }, 1000);
        } 
    })

    // displays the text that is show whenever the mouse enter the svg element
    // on the project gallery
    $("image").mouseenter(function() {
        const id_site = "#" + $(this).attr("id").split("_")[1];
        $(id_site).attr("font-size", "20");
    })

    // this does the contrary to the previous function
    $("image").mouseleave(function() {
        const id_site = "#" + $(this).attr("id").split("_")[1];
        $(id_site).attr("font-size", "0");
    })

    // displays the content related to the current view in the image carousel
    // setting the corresponding image of the project and keeping record of 
    // the image id so we know what to show when the user goes to the next
    // or the previous image in the carousel
    $("image").click(function() {        
        let recognize = panels.indexOf($(this).attr("id"));
        $("#current").attr("src", images[recognize]);
        $("#current").attr("id", "" + recognize);
        change_modal("open", "carousel-gallery");
        current = recognize;
    })

    // logic behind the button that close the carousel
    // if the project info modal (another modal inside the project modal)
    // is being displayed this button also close that modal
    $("#close-gal").click(function() {
        $("#" + current).attr("id", "current");
        change_modal("close", "carousel-gallery");
        current = "#current";
        if ($("#project-description").css("display") != "none") {
            $("#project-description").fadeOut();
        }
    })

    // logic of the rigth navigation arrow of the carousel
    // with this we can know what the next project is supposed to be
    // so we can change the look accordingly
    $("#plus").click(function () {
        if (current < panels.length - 1) {
            $("#" + current).attr("id", `${current + 1}`);
            current += 1;
        } else {
            $("#" + current).attr("id", `${0}`); 
            current = 0;
        }
        $("#" + current).attr("src", images[current]);
        if ($("#project-description").css("display") != "none") {
            $("#project-description").fadeOut();
        }
    })

    // same as before but for the left arrow
    $("#minus").click(function () {
        if (current > 0) {
            $("#" + current).attr("id", `${current - 1}`);
            current -= 1;
        } else {
            $("#" + current).attr("id", `${images.length - 1}`); 
            current = images.length - 1;
        }
        $("#" + current).attr("src", images[current]);
        if ($("#project-description").css("display") != "none") {
            $("#project-description").fadeOut();
        }
    })

    // logic behind the detalles button of the project gallery (that modal inside
    // a modal from before) here the proper project info is displayed depending
    // on where we are on the carousel
    $("#details").click(function () {
        let cont_elem = $(`#${related_content[current]}`).html();
        $("#project-description").html(cont_elem);
        $("#project-description").fadeToggle();
    })

    // this piece of code is in charge of the logic
    // that displays the inputs on the form inside the
    // dialog element depending on what the user wants to
    // send like an email or phone number I know for sure
    // im not covering all the edge cases but works as good 
    // as it is without having to add more complexity
    $("#identifying").change(function () {
        let current_display = [$("#phone-select"), $("#email-select"),];
        if ($(this).val() === "both") {

            // felt like doing this instead of a for each 
            // not sure if correct but I know is not that readable
            current_display.map((x) => {if (x.css("display") === "none"){x.fadeIn()}});
            current_display.map((x) => {if (x.css("display") != "none"){$("#"+x.attr("id").split("-")[0]).prop("required", true)}});
        } else if ($(this).val() != "no-id") {
            if ($("#" + $(this).val() + "-select").css("display") === "none") {
                $("#" + $(this).val() + "-select").fadeIn();
                $("#" + $(this).val()).prop("required", true);
            }
        } else {

            // more of this because why not?
            current_display.map((x) => {if (x.css("display") != "none"){$("#"+x.attr("id").split("-")[0]).removeAttr("required")}});
            current_display.map((x) => {if (x.css("display") != "none"){$("#"+x.attr("id").split("-")[0]).val("")}});
            current_display.map((x) => {if (x.css("display") != "none"){x.fadeOut()}});
        }
    })

    // creates a success message to be display when a form is submitted, then it shows that message
    // and finally the form values are reset
    // we don't have a server so yeah not implementing an error message
    // in case the form could't be successfully submitted
    $("#contact-form").on("submit", function() {
        form_name = $("#name").val();
        $("#identifying").trigger("change");
        change_modal("close", "modal-form");
    })

    // one of those edge cases I mentioned before
    $("#form-close").click(function() {
        $("#contact-form")[0].reset();
        $("#message").attr("required", false);
        $("#name").attr("required", false);
        $("#identifying").trigger("change"); 
    })
});
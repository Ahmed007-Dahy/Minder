//The navbar responsive toggle part
document.getElementById('toggle').addEventListener('click', function () {
    document.getElementById('nav').classList.toggle('-right-full');
    document.getElementById('nav').classList.toggle('right-0');
});
//When the page load
function Start() {
    document.getElementById('home').classList.add('border-b-4');
    document.getElementById('sCircle1').classList.add('bg-bgColorFooter');
    document.getElementById('sCircle2').classList.add('bg-sign-up-fontColor');
    document.getElementById('slider-2').classList.add('hidden');
    document.getElementById('audio-2').classList.add('hidden');
    document.getElementById('blog-2').classList.add('hidden');
    document.getElementById('video-2').classList.add('hidden');
}
// Male&Female button
function maleButton() {
    document.getElementById('male').classList.add('bg-MaleColor');
    document.getElementById('male').classList.add('text-white');
    document.getElementById('male').classList.add('w-full');
    document.getElementById('content').classList.add('text-white');
    document.getElementById('female').classList.remove('bg-FemaleColor');
    document.getElementById('female').classList.add('bg-white');
    document.getElementById('female').classList.remove('w-full');
    document.getElementById('femaleIcon').classList.remove('text-white');
}
function femaleButton() {
    document.getElementById('female').classList.add('bg-FemaleColor');
    document.getElementById('female').classList.remove('bg-white');
    document.getElementById('female').classList.add('w-full');
    document.getElementById('femaleIcon').classList.add('text-white');
    document.getElementById('male').classList.remove('bg-MaleColor');
    document.getElementById('male').classList.remove('text-white');
    document.getElementById('male').classList.remove('w-full');
    document.getElementById('male').classList.add('hover:text-white');
    document.getElementById('content').classList.add('text-MaleColor');
}
// For Materials-page
// when Materials-page load that happen
function loda() {
    document.getElementById('secondSlider').classList.add('hidden');
    document.getElementById('Materials').classList.add('border-b-4');
}
function whenLoad() {
    document.getElementById('Materials').classList.add('border-b-4');
    document.getElementById('audio-2').classList.add('hidden');
    document.getElementById('blog-2').classList.add('hidden');
    document.getElementById('video-2').classList.add('hidden');
}
function aboutLoad() {
    document.getElementById('aboutUs').classList.add('border-b-4');
}
//Hover&Foucs for the first section of Materials
function onHover() {
    $('#spiritual').attr('src', 'images/materials/spiritual-white.svg');
    document.getElementById('spiritual').classList.add('duration-300');
    document;
}
function offHover() {
    $('#spiritual').attr('src', 'images/materials/spiritual.svg');
}
function onHoverspiritual() {
    $('#spiritual-2').attr('src', 'images/materials/spiritual-white.svg');
    document.getElementById('spiritual-2').classList.add('duration-300');
}
function offHoverspiritual() {
    $('#spiritual-2').attr('src', 'images/materials/spiritual.svg');
}
function pressSpiritual() {
    document
        .getElementById('spiritual-press')
        .classList.add('bg-bgColorButton2');
    document.getElementById('spiritual-press').classList.add('opacity-75');
    document.getElementById('spiritual-press').classList.add('w-auto');
    document.getElementById('spiritual-white').classList.add('block');
    document.getElementById('spiritual-white').classList.remove('hidden');
    document.getElementById('spiritual').classList.add('hidden');
    document.getElementById('spiritual').classList.remove('block');
    document
        .getElementById('mindfulness')
        .classList.remove('bg-bgColorButton2');
    document.getElementById('mindfulness').classList.add('border');
    document.getElementById('mindfulness').classList.add('border-borderColor');
    document.getElementById('mindfulness-black').classList.remove('hidden');
    document.getElementById('mindfulness-black').classList.add('block');
    document.getElementById('mindfulness-white').classList.add('hidden');
}
function pressMindfulness() {
    document.getElementById('mindfulness').classList.add('bg-bgColorButton2');
    document.getElementById('mindfulness').classList.add('opacity-75');
    document.getElementById('mindfulness').classList.add('w-auto');
    document.getElementById('mindfulness-white').classList.add('block');
    document.getElementById('mindfulness-white').classList.remove('hidden');
    document.getElementById('mindfulness-black').classList.add('hidden');
    document.getElementById('mindfulness-black').classList.remove('block');
    document
        .getElementById('spiritual-press')
        .classList.remove('bg-bgColorButton2');
    document.getElementById('spiritual-press').classList.add('border');
    document
        .getElementById('spiritual-press')
        .classList.add('border-borderColor');
    document.getElementById('mindfulness-black').classList.remove('block');
    document.getElementById('mindfulness-black').classList.add('hidden');
    document.getElementById('mindfulness-white').classList.add('block');
    document.getElementById('spiritual-white').classList.add('hidden');
}
function onHoverFocused() {
    $('#focused').attr('src', 'images/materials/focused-white.svg');
    document.getElementById('focused').classList.add('duration-300');
}
function offHoverFocused() {
    $('#focused').attr('src', 'images/materials/focused.svg');
}
function onHovermantra() {
    $('#mantra').attr('src', 'images/materials/mantra-white.svg');
    document.getElementById('mantra').classList.add('duration-300');
}
function offHovermantra() {
    $('#mantra').attr('src', 'images/materials/mantra.svg');
}
function onHoverprogressive() {
    $('#progressive').attr('src', 'images/materials/progressive-white.svg');
    document.getElementById('progressive').classList.add('duration-300');
}
function offHoverprogressive() {
    $('#progressive').attr('src', 'images/materials/progressive.svg');
}
//open blog part
function openBlog() {
    document.getElementById('blogModal').classList.remove('hidden');
    document.getElementById('blogModal').classList.add('flex');
}
// open video part
function openVideo() {
    document.getElementById('videoSection').classList.remove('hidden');
    document.getElementById('videoSection').classList.add('flex');
}

function closeVideo() {
    document.getElementById('videoSection').classList.remove('flex');
    document.getElementById('videoSection').classList.add('hidden');
}
//open Audio part
//The audio section
function openAudio() {
    document.getElementById('audioSection').classList.remove('hidden');
    document.getElementById('audioSection').classList.add('flex');
}

function closeAudio() {
    document.getElementById('audioSection').classList.remove('flex');
    document.getElementById('audioSection').classList.add('hidden');
}

//The audio button
function playAudio() {
    document.getElementById('playButton').classList.remove('flex');
    document.getElementById('playButton').classList.add('hidden');

    document.getElementById('pauseButton').classList.remove('hidden');
    document.getElementById('pauseButton').classList.add('flex');
}

function pauseAudio() {
    document.getElementById('pauseButton').classList.remove('flex');
    document.getElementById('pauseButton').classList.add('hidden');

    document.getElementById('playButton').classList.remove('hidden');
    document.getElementById('playButton').classList.add('flex');
}
//**************************************** */
// user-profile-code
function openProfile() {
    document.getElementById('userProfile').classList.add('fixed');
    document.getElementById('userProfile').classList.add('transition-all');
    document.getElementById('userProfile').classList.add('duration-300');
    document.getElementById('userProfile').classList.add('ease-in-out');
    document.getElementById('userProfile').classList.remove('hidden');
}
function closeProfile() {
    document.getElementById('userProfile').classList.remove('fixed');
    document.getElementById('userProfile').classList.add('hidden');
}
function showName() {
    document.getElementById('formModal').classList.remove('hidden');
    document.getElementById('formModal').classList.add('block');
    document.getElementById('iconDown').classList.add('opacity-0');
    document.getElementById('iconDown').classList.add('block');
    document.getElementById('iconUP').classList.remove('opacity-0');
    document.getElementById('iconUP').classList.add('block');
    document.getElementById('iconUP').classList.add('absolute');
}
function hideName() {
    document.getElementById('formModal').classList.remove('block');
    document.getElementById('formModal').classList.add('hidden');
    document.getElementById('iconDown').classList.add('absolute');
    document.getElementById('iconDown').classList.remove('opacity-0');
    document.getElementById('iconDown').classList.remove('block');
    document.getElementById('iconUP').classList.add('opacity-0');
    document.getElementById('iconUP').classList.add('block');
    document.getElementById('iconUP').classList.remove('absolute');
}
function showPassword() {
    document.getElementById('passwordModal').classList.remove('hidden');
    document.getElementById('passwordModal').classList.add('block');
    document.getElementById('iconLow').classList.add('opacity-0');
    document.getElementById('iconLow').classList.add('block');
    document.getElementById('iconHigh').classList.remove('opacity-0');
    document.getElementById('iconHigh').classList.add('block');
    document.getElementById('iconHigh').classList.add('absolute');
}
function hidePassword() {
    document.getElementById('passwordModal').classList.remove('block');
    document.getElementById('passwordModal').classList.add('hidden');
    document.getElementById('iconLow').classList.add('absolute');
    document.getElementById('iconLow').classList.remove('opacity-0');
    document.getElementById('iconLow').classList.remove('block');
    document.getElementById('iconHigh').classList.add('opacity-0');
    document.getElementById('iconHigh').classList.add('block');
    document.getElementById('iconHigh').classList.remove('absolute');
    document.getElementById('passwordMsg').classList.add('hidden');
}
function showMsg() {
    document.getElementById('passwordMsg').classList.add('block');
    document.getElementById('passwordMsg').classList.remove('hidden');
}
//*********************************** */
function blogCloseButton() {
    document.getElementById('blogModal').classList.remove('flex');
    document.getElementById('blogModal').classList.add('hidden');
}
// add Audio part
function openAudioModal() {
    document.getElementById('audioModal').classList.remove('hidden');
    document.getElementById('audioModal').classList.add('block');
}
function closeAudioModal() {
    document.getElementById('audioModal').classList.remove('block');
    document.getElementById('audioModal').classList.add('hidden');
}
//add Video part
function openVideoModal() {
    document.getElementById('videoModal').classList.remove('hidden');
    document.getElementById('videoModal').classList.add('block');
}
function closeVideoModal() {
    document.getElementById('videoModal').classList.remove('block');
    document.getElementById('videoModal').classList.add('hidden');
}
// add Blog Part
function openBlogModal() {
    document.getElementById('addBlogModal').classList.remove('hidden');
    document.getElementById('addBlogModal').classList.add('block');
}
function closeBlogModal() {
    document.getElementById('addBlogModal').classList.remove('block');
    document.getElementById('addBlogModal').classList.add('hidden');
}
//************************************************* */
// doctorInfo-part
function openDoctorInfo() {
    document.getElementById('doctorInfo').classList.remove('hidden');
    document.getElementById('doctorInfo').classList.add('flex');
}
function removeDoctorInfo() {
    document.getElementById('doctorInfo').classList.remove('flex');
    document.getElementById('doctorInfo').classList.add('hidden');
}
//************************************************* */
//The navbar buttons
function homeButton() {
    document.getElementById('home').classList.add('border-b-4');
    document.getElementById('aboutUs').classList.remove('border-b-4');
    document.getElementById('Materials').classList.remove('border-b-4');
}

function aboutUsButton() {
    document.getElementById('aboutUs').classList.add('border-b-4');
    document.getElementById('home').classList.remove('border-b-4');
    document.getElementById('Materials').classList.remove('border-b-4');
}

function materialsButton() {
    document.getElementById('Materials').classList.add('border-b-4');
    document.getElementById('aboutUs').classList.remove('border-b-4');
    document.getElementById('home').classList.remove('border-b-4');
}
function faqButton() {
    document.getElementById('Materials').classList.add('border-b-4');
    document.getElementById('aboutUs').classList.remove('border-b-4');
    document.getElementById('home').classList.remove('border-b-4');
}
//************************************************* */
// The modal part
function checkMail() {
    document.getElementById('emailModal').classList.remove('hidden');
    document.getElementById('emailModal').classList.add('flex');
}
function checkPassword() {
    document.getElementById('passwordModal').classList.remove('hidden');
    document.getElementById('passwordModal').classList.add('flex');
}
function checkCertification() {
    document.getElementById('certificationModal').classList.remove('hidden');
    document.getElementById('certificationModal').classList.add('flex');
}
function closeCertification() {
    document.getElementById('certificationModal').classList.remove('flex');
    document.getElementById('certificationModal').classList.add('hidden');
}
// The slider part
function sliderButton1() {
    document.getElementById('slider-2').classList.add('hidden');
    document.getElementById('slider-1').classList.remove('hidden');

    document.getElementById('sCircle1').classList.add('bg-bgColorFooter');
    document
        .getElementById('sCircle1')
        .classList.remove('bg-sign-up-fontColor');

    document.getElementById('sCircle2').classList.remove('bg-bgColorFooter');
    document.getElementById('sCircle2').classList.add('bg-sign-up-fontColor');
}

function sliderButton2() {
    document.getElementById('slider-1').classList.add('hidden');
    document.getElementById('slider-2').classList.remove('hidden');

    document.getElementById('sCircle2').classList.add('bg-bgColorFooter');
    document
        .getElementById('sCircle2')
        .classList.remove('bg-sign-up-fontColor');

    document.getElementById('sCircle1').classList.remove('bg-bgColorFooter');
    document.getElementById('sCircle1').classList.add('bg-sign-up-fontColor');
    var splide = new Splide('.splide', {
        type: 'loop',
        drag: 'free',
        perPage: 2
    });

    splide.mount();
}
// The Psychiatrists slider code area
function sliderButton1() {
    document.getElementById('slider-2').classList.add('hidden');
    document.getElementById('slider-1').classList.remove('hidden');

    document.getElementById('sCircle1').classList.add('bg-bgColorFooter');
    document
        .getElementById('sCircle1')
        .classList.remove('bg-sign-up-fontColor');

    document.getElementById('sCircle2').classList.remove('bg-bgColorFooter');
    document.getElementById('sCircle2').classList.add('bg-sign-up-fontColor');
}

function sliderButton2() {
    document.getElementById('slider-1').classList.add('hidden');
    document.getElementById('slider-2').classList.remove('hidden');

    document.getElementById('sCircle2').classList.add('bg-bgColorFooter');
    document
        .getElementById('sCircle2')
        .classList.remove('bg-sign-up-fontColor');

    document.getElementById('sCircle1').classList.remove('bg-bgColorFooter');
    document.getElementById('sCircle1').classList.add('bg-sign-up-fontColor');
}

// The Materials Page Slider
function leftButton() {
    document.getElementById('secondSlider').classList.add('hidden');
    document.getElementById('firstSlider').classList.remove('hidden');

    document.getElementById('sCircle1').classList.add('bg-bgColorFooter');
    document
        .getElementById('sCircle1')
        .classList.remove('bg-sign-up-fontColor');

    document.getElementById('sCircle2').classList.remove('bg-bgColorFooter');
    document.getElementById('sCircle2').classList.add('bg-sign-up-fontColor');
}
function rightButton() {
    document.getElementById('firstSlider').classList.add('hidden');
    document.getElementById('secondSlider').classList.remove('hidden');

    document.getElementById('sCircle2').classList.add('bg-bgColorFooter');
    document
        .getElementById('sCircle2')
        .classList.remove('bg-sign-up-fontColor');

    document.getElementById('sCircle1').classList.remove('bg-bgColorFooter');
    document.getElementById('sCircle1').classList.add('bg-sign-up-fontColor');
}
//The Materials code area :

//1- The audio part
function AudioButton1() {
    document.getElementById('audio-2').classList.add('hidden');
    document.getElementById('audio-1').classList.remove('hidden');
}

function AudioButton2() {
    document.getElementById('audio-1').classList.add('hidden');
    document.getElementById('audio-2').classList.remove('hidden');
}

//2- The blog part
function blogButton1() {
    document.getElementById('blog-2').classList.add('hidden');
    document.getElementById('blog-1').classList.remove('hidden');
}

function blogButton2() {
    document.getElementById('blog-1').classList.add('hidden');
    document.getElementById('blog-2').classList.remove('hidden');
}

//3- The video part
function videoButton1() {
    document.getElementById('video-2').classList.add('hidden');
    document.getElementById('video-1').classList.remove('hidden');
}

function videoButton2() {
    document.getElementById('video-1').classList.add('hidden');
    document.getElementById('video-2').classList.remove('hidden');
}

//The mood window section :
function mood1() {
    document
        .getElementById('mood1')
        .classList.add(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood2')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood3')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood4')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood5')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
}
function mood2() {
    document
        .getElementById('mood1')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood2')
        .classList.add(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood3')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood4')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood5')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
}
function mood3() {
    document
        .getElementById('mood1')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood2')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood3')
        .classList.add(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood4')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood5')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
}
function mood4() {
    document
        .getElementById('mood1')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood2')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood3')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood4')
        .classList.add(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood5')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
}
function mood5() {
    document
        .getElementById('mood1')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood2')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood3')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood4')
        .classList.remove(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
    document
        .getElementById('mood5')
        .classList.add(
            'p-0.5',
            'border-4',
            'border-appointmentBttn',
            'rounded-full'
        );
}

function Continue() {
    document.getElementById('moodWindow').classList.remove('flex');
    document.getElementById('moodWindow').classList.add('hidden');
}

//Add an appointment button
function addApointmentButton() {
    document.getElementById('addAppointment').classList.remove('hidden');
    document.getElementById('addAppointment').classList.add('flex');
    document
        .getElementById('schedule1')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule2')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule3')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule4')
        .classList.remove('ring-4', 'ring-btnRing');
}

//The schedule selection
function schedule1() {
    document
        .getElementById('schedule1')
        .classList.add('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule2')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule3')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule4')
        .classList.remove('ring-4', 'ring-btnRing');
}

function schedule2() {
    document
        .getElementById('schedule1')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule2')
        .classList.add('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule3')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule4')
        .classList.remove('ring-4', 'ring-btnRing');
}

function schedule3() {
    document
        .getElementById('schedule1')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule2')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule3')
        .classList.add('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule4')
        .classList.remove('ring-4', 'ring-btnRing');
}

function schedule4() {
    document
        .getElementById('schedule1')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule2')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule3')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule4')
        .classList.add('ring-4', 'ring-btnRing');
}

//closing the scheduale part
function closeAppointment() {
    document.getElementById('addAppointment').classList.remove('flex');
    document.getElementById('addAppointment').classList.add('hidden');
}

//Selected appointment
function Selected() {
    document.getElementById('addAppointment').classList.remove('flex');
    document.getElementById('addAppointment').classList.add('hidden');

    document.getElementById('selectedDoctor').classList.remove('flex');
    document.getElementById('selectedDoctor').classList.add('hidden');

    document.getElementById('selectedAppointment').classList.remove('hidden');
    document.getElementById('selectedAppointment').classList.add('flex');

    document
        .getElementById('schedule1')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule2')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule3')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('schedule4')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('scheduleDoctor2')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('scheduleDoctor1')
        .classList.remove('ring-4', 'ring-btnRing');
}

//closing the selected appointment
function closeSelected() {
    document.getElementById('selectedAppointment').classList.remove('flex');
    document.getElementById('selectedAppointment').classList.add('hidden');
}

//Opnening the doctor's info section
function DoctorInfo() {
    document.getElementById('selectedDoctor').classList.remove('hidden');
    document.getElementById('selectedDoctor').classList.add('flex');
}

//closing the Doctor's info part
function closeDoctorInfo() {
    document.getElementById('selectedDoctor').classList.remove('flex');
    document.getElementById('selectedDoctor').classList.add('hidden');
    document
        .getElementById('scheduleDoctor2')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('scheduleDoctor1')
        .classList.remove('ring-4', 'ring-btnRing');
}

//The doctor's schedule selection
function scheduleDoctor1() {
    document
        .getElementById('scheduleDoctor1')
        .classList.add('ring-4', 'ring-btnRing');
    document
        .getElementById('scheduleDoctor2')
        .classList.remove('ring-4', 'ring-btnRing');
}

function scheduleDoctor2() {
    document
        .getElementById('scheduleDoctor1')
        .classList.remove('ring-4', 'ring-btnRing');
    document
        .getElementById('scheduleDoctor2')
        .classList.add('ring-4', 'ring-btnRing');
}

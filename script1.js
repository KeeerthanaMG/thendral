document.addEventListener('DOMContentLoaded', function () {
    const titles = [
        "Marriage",
        "Engagement",
        "Birthday"
    ];

    const contents = [
        "Marriage catering services provide comprehensive food and beverage arrangements for weddings, including menu planning, preparation, and serving. They offer a variety of cuisines and customized options to match the couple's preferences, ensuring a memorable culinary experience for the guests. These services often include setup, presentation, and cleanup, allowing the couple and their families to enjoy the celebration stress-free.",
        "Engagement catering services specialize in providing tailored food and beverage experiences for engagement parties. They handle menu selection, preparation, and presentation, offering a range of cuisines to suit the couple's tastes and theme of the event. These services ensure a seamless and enjoyable culinary experience, allowing hosts to focus on celebrating the special occasion with their guests.",
        "Birthday catering services offer customized food and beverage solutions for birthday celebrations. They manage menu planning, cooking, and serving, providing a variety of dishes to suit the preferences and theme of the party. These services ensure a delightful dining experience, allowing hosts to enjoy the festivities without worrying about the details."
    ];

    const carouselElement = document.getElementById('engagementCarousel');
    const titleElement = document.getElementById('engagementTitle');
    const contentElement = document.getElementById('engagementContent');

    $(carouselElement).on('slide.bs.carousel', function (event) {
        const slideIndex = $(event.relatedTarget).index();
        titleElement.textContent = titles[slideIndex];
        contentElement.textContent = contents[slideIndex];
    });
});

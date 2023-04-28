import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '~node_modules/modern-normalize/modern-normalize.css';
// // const imageGrid = document.querySelector('#image-grid');
// // const loadingMessage = document.querySelector('#loading-message');

// // const form = document.querySelector('#search-form');
// // const gallery = document.querySelector('.gallery');
 const API_KEY = "35695816-a21dc46a31ad12c59a935ea58";



//       // 2================
// const form = document.getElementById("search-form");
// const gallery = document.getElementById("gallery");

// const searchQueryInput = form.elements["searchQuery"];


// const perPage = 40;

//  let currentSearchQuery = "";

//  form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const searchQuery = searchQueryInput.value.trim();
//   if (searchQuery) {
//     pageNumber = 1;
//     currentSearchQuery = searchQuery;
//     searchImages(searchQuery, pageNumber);
//   }
// });

//  loadMoreBtn.addEventListener("click", () => {
//   searchImages(currentSearchQuery, pageNumber);
//  });

// async function searchImages(searchQuery, page) {
//  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`;

//    try {
//     const response = await fetch(url);
//     const data = await response.json();
//     if (data.hits.length === 0) {
//       notiflix.Notify.failure(
//         "Sorry, there are no images matching your search query. Please try again."
//      );
//          return;
//  }

//     const images = data.hits.map((hit) => ({
//      webformatURL: hit.webformatURL,
//      largeImageURL: hit.largeImageURL,
//      tags: hit.tags,
//      likes: hit.likes,
//      views: hit.views,
//      comments: hit.comments,
//      downloads: hit.downloads,
//  }));

//     if (page === 1) {
//       gallery.innerHTML = "";
//     }

//     images.forEach((image) => {
//       const galleryItem = `
//         <div class="gallery-item">
//           <a href="${image.largeImageURL}">
//             <img src="${image.webformatURL}" alt="${image.tags}" />
//           </a>
//          <div class="stats">
//            <p class="stats-item">
//               <i class="material-icons">thumb_up</i>
//               ${image.likes}
//            </p>
//            <p class="stats-item">
//              <i class="material-icons">visibility</i>
//              ${image.views}
//            </p>
//            <p class="stats-item">
//              <i class="material-icons">comment</i>
//              ${image.comments}
//            </p>
//            <p class="stats-item">
//              <i class="material-icons">cloud_download</i>
//              ${image.downloads}
//           </p>
//          </div>
//      </div>
//   `;
//       gallery.insertAdjacentHTML("beforeend", galleryItem);
//  });

//     if (page === 1) {
//       loadMoreBtn.style.display = "block";
//    }
//     pageNumber++;
//  } catch (error) {
//     console.log(error);
//     notiflix.Notify.failure("Something went wrong. Please try again later.");
//   }
// }



//              // 4===========
// // // Select the load more button element
//    const loadMoreBtn = document.querySelector('.load-more');

// // // Initialize page number to 1
//  let pageNumber = 1;

// // Add an event listener to the search form submit button
//  document.querySelector('#search-form').addEventListener('submit', event => {
//    event.preventDefault();
//   // Hide the load more button
//   loadMoreBtn.style.display = 'none';
//   // Reset page number to 1
//    pageNumber = 1;
//   // Get the search query from the input field
//    const searchQuery = event.target.elements.searchQuery.value;
//   // Make a request to the Pixabay API
//    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=40`)
//      .then(response => response.json())
//      .then(data => {
//  // Handle the response data
//  // Check if the total number of hits has been reached
//       if (pageNumber * 40 >= data.totalHits) {
//          loadMoreBtn.style.display = 'none';
//          notiflix.notification.info('We are sorry, but you have reached the end of search results.');
//      } else {
//        loadMoreBtn.style.display = 'block';
//     }
//  })
//     .catch(error => {
//       console.error(error);
//       notiflix.notification.failure('Failed to fetch images. Please try again later.');
//    });
// });

// // // Add an event listener to the load more button
//  loadMoreBtn.addEventListener('click', () => {
//   // Increase page number
//    pageNumber++;
  
//   // Get the search query from the input field
//   const searchQuery = document.querySelector('#search-form input[name="searchQuery"]').value;
  
//   // Make a request to the Pixabay API
//    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=40`)
//     .then(response => response.json())
//      .then(data => {
//        // Handle the response data
//       // Check if the total number of hits has been reached
//        if (pageNumber * 40 >= data.totalHits) {
//          loadMoreBtn.style.display = 'none';
//          notiflix.notification.info('We\'re sorry, but you\'ve reached the end of search results.');
//      }
// })
//      .catch(error => {
//       console.error(error);
//        notiflix.notification.failure('Failed to fetch images. Please try again later.');
//    });
//  });

//  // After the first request, for each new search, display a notification that will say how many images were found in total (totalHits property).
// //  Notification text "Hooray! We found totalHits images."
//  async function handleFormSubmit(event) {
//    event.preventDefault();
//    const searchQuery = event.currentTarget.elements.searchQuery.value.trim();
//     if (searchQuery === "") {
//        return notiflix.Notify.warning("Please enter a search keyword.");
//    }
//      galleryContainer.innerHTML = "";
//      form.reset();
//     pageNumber = 1;
//     toggleLoadMoreButton(false);
//     const response = await fetch(
//       `${baseUrl}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${pageNumber}`
//    );
//    const { hits, totalHits } = await response.json();
//         if (hits.length === 0) {
//        return notiflix.Notify.failure(
//         "Sorry, there are no images matching your search query. Please try again."
//        );
//      }
//     galleryContainer.insertAdjacentHTML("beforeend", createGalleryMarkup(hits));
//      toggleLoadMoreButton(true);
//      notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
//   }

// // //   Add a display of a large version of an image with the SimpleLightbox library for a full gall
// //  const form = document.querySelector('#search-form');
// //  const loadMoreBtn = document.querySelector('.load-more');
// //  const gallery = document.querySelector('.gallery');
//  let page = 1;
//  let searchQuery = '';

//  form.addEventListener('submit', e => {
//    e.preventDefault();
//    searchQuery = e.target.elements.searchQuery.value;
//    page = 1;
//    gallery.innerHTML = '';
//    loadMoreBtn.style.display = 'none';

//    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`)
//      .then(response => response.json())
//     .then(data => {
//        const totalHits = data.totalHits;
//        if (totalHits === 0) {
//          notiflix.Notify.warning('Sorry, there are no images matching your search query. Please try again.');
//         return;
//       }

//        notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
//        gallery.innerHTML = data.hits.map(hit => `
//          <a href="${hit.largeImageURL}" class="gallery__item">
//            <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" />
//            <div class="gallery__info">
//              <p>Likes: ${hit.likes}</p>
//             <p>Views: ${hit.views}</p>
//              <p>Comments: ${hit.comments}</p>
//              <p>Downloads: ${hit.downloads}</p>
//            </div>
//         </a>
//      `).join('');

//        const lightbox = new SimpleLightbox('.gallery a', {});
//        lightbox.refresh();

//        if (data.hits.length === 40) {
//          loadMoreBtn.style.display = 'block';
//      }
//  })
//      .catch(error => {
//        notiflix.Notify.failure('Oops, something went wrong. Please try again later.');
//       console.error(error);
//    });
// });

//  loadMoreBtn.addEventListener('click', () => {
//    page++;

//   fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`)
//      .then(response => response.json())
//      .then(data => {
//        gallery.insertAdjacentHTML('beforeend', data.hits.map(hit => `
//          <a href="${hit.largeImageURL}" class="gallery__item">
//            <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" />
//            <div class="gallery__info">
//              <p>Likes: ${hit.likes}</p>
//              <p>Views: ${hit.views}</p>
//              <p>Comments: ${hit.comments}</p>
//              <p>Downloads: ${hit.downloads}</p>
//            </div>
//          </a>
//        `).join(''));  

//        const lightbox = new SimpleLightbox('.gallery a', {});
//        lightbox.refresh();

//       if (data.hits.length < 40) {
//          loadMoreBtn.style.display = 'none';
//        }
//      })
//      .catch(error => {
//       notiflix.Notify.failure('Oops, something went wrong. Please try again later.');
//        console.error(error);
//      });
// });
 
// // // make the page scroll smoothly after requesting and rendering each next group of images
// //  const { height: cardHeight } = document.querySelector(".gallery")
// //    .firstElementChild.getBoundingClientRect();

// //  window.scrollBy({
// //    top: cardHeight * 2,
// //    behavior: "smooth",
// // });
// // // To smoothly scroll the page after requesting and rendering each next group of images, you can add the provided code inside the success callback function of the API request,
// // //  right after adding the new cards to the gallery container
// // // inside the success callback of the API request
//  const galleryContainer = document.querySelector(".gallery");
// // // ... code for creating and adding new image cards to the container

// // // smooth scroll to the bottom of the newly added cards
//  const { height: cardHeight } = galleryContainer.firstElementChild.getBoundingClientRect();
//  window.scrollBy({
//    top: cardHeight * 2,
//    behavior: "smooth",
//  });
// // // Instead of the “Load more” button, you can make an endless loading of images when scrolling the page. We will give you complete freedom of action in the implementation, you can use any libraries.
// // // To implement endless loading of images, we can use the Intersection Observer API, which allows us to detect when an element enters or exits the viewport. We can use this to trigger a function that loads more images when the user scrolls to the bottom of the page.
// // // First, we need to modify the search function to accept a page parameter instead of always starting with page 1. We also need to return a Promise that resolves with the image data:
//  function searchImages(query, page) {
//      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`;
    
//     return fetch(url)
//        .then(response => {
//          if (!response.ok) {
//           throw new Error(response.status);
//         }
//          return response.json();
//        })
//        .then(data => {
//          if (data.hits.length === 0) {
//           throw new Error('No images found');
//         }
//          return data.hits;
//        })
//   }
// // //  We need to modify the loadImages function to accept a page parameter, load the images for that page, and append them to the gallery:
//  function loadImages(page) {
//      searchImages(searchQuery, page)
//        .then(data => {
//           // append new images to gallery
//          gallery.innerHTML += generateGalleryMarkup(data);
        
//         lightbox.refresh();
        
//          // show load more button
//          if (data.length === 40) {
//            loadMoreBtn.style.display = 'block';
//          } else {
//            loadMoreBtn.style.display = 'none';
//            notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
//          }
//        })
//        .catch(error => {
//          notiflix.Notify.failure(`Failed to load images: ${error.message}`);
//        });
//   }
// // // We can then use the Intersection Observer API to trigger the loadImages function when the user scrolls to the bottom of the page:
// //   // create the observer scss
//  const observer = new IntersectionObserver(entries => {
//      if (entries[0].isIntersecting) {
//        // load more images
//        page++;
//        loadImages(page);
//      }
//    }, { threshold: 1 });
  
//    // observe the bottom of the gallery
//    const galleryBottom = gallery.lastElementChild;
//    observer.observe(galleryBottom);

// // //  Finally, we need to remove the load more button from the markup and remove the event listener for the button click.
// // // With this implementation, as the user scrolls to the bottom of the page, more images will be loaded and appended to the gallery. The user can continue scrolling to load more images until all images matching the search query have been loaded.
// import '~node_modules/modern-normalize/modern-normalize.css';

// //  A ------------------================
import { markup } from './markup';
import { Api } from './api';
import { Notify } from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const selectors = {
  form: document.querySelector('.search-form'),
  button: document.querySelector('.search-form button'),
  gallery: document.querySelector('.gallery'),
  delimiter: document.querySelector('.delimiter'),
  spinner: document.querySelector('.spinner'),
};

const slider = new SimpleLightbox('.slide-wrapper', {
  overlayOpacity: 0.9,
  showCounter: false,
  captionsData: 'alt',
  captionDelay: 150,
});

const api = new Api();
let query = '';

const intersectionObserver = new IntersectionObserver(onEndOfScroll);
intersectionObserver.observe(selectors.delimiter);

Notify.init({ showOnlyTheLastOne: true, clickToClose: true });
selectors.form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  query = selectors.form.searchQuery.value.trim();
  if (query === '' || query === api.lastSearch)
   return;

  selectors.button.disabled = true;
  clearPage();
  await renderPage();
  selectors.button.disabled = false;
}

function clearPage() {
  selectors.gallery.innerHTML = '';
}

async function renderPage() {
  try {
    selectors .spinner.classList.remove('hidden');
    const srcData = await api.getData(query);
    const srcElements = srcData.data.hits;

    if (srcElements.length === 0) {
      Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      return;
    }

    if (api.isNewSearch) {
      Notify.info(`Hooray! We found ${srcData.data.totalHits} images.`);
    }

    const htmlMarkup = await markup.createManyCards(srcElements);
    selectors.gallery.insertAdjacentHTML('beforeend', htmlMarkup);
    slider.refresh();
  }
  catch (error) {
    Notify.failure(error.message);
  }
  finally {
    selectors.spinner.classList.add('hidden');
  }
}

 

function onEndOfScroll(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && query !== '' && query === api.lastSearch) {
      if (!api.isEndOfPages) renderPage();
      else Notify.warning("We're sorry, but you've reached the end of search results.");
    }
  });
}
const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerdiv = document.createElement('div');
  const spandate = document.createElement('span');
  const head1 = document.createElement('h1');
  const spantemp = document.createElement('span');

  headerdiv.classList.add('header');
  spandate.classList.add('date');
  spantemp.classList.add('temp');

  headerdiv.appendChild(spandate);
  headerdiv.appendChild(head1);
  headerdiv.appendChild(spantemp);

  
  head1.textContent = title;
  spandate.textContent = date;
  spantemp.textContent = temp;

return headerdiv
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const selectorDate = document.querySelector(selector);
  selectorDate.appendChild(Header(
    'Lambda Times', 'July 18 2022', '70°F'
  ))}

export { Header, headerAppender }

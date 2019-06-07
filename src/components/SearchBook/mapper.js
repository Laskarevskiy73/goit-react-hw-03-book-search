const mapper = items => {
  return items.map(item => {
    const { id } = item;
    const {
      title = '',
      description = '',
      authors: author = [],
      publisher = '',
      publishedDate = '',
      pageCount = 0,
      averageRating: rating = 0,
      imageLinks: { thumbnail: image },
    } = item.volumeInfo;

    return {
      id,
      image,
      rating,
      pageCount,
      title,
      description,
      author,
      publisher,
      publishedDate,
    };
  });
};

export default mapper;

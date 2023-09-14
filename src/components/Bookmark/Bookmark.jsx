import PropTypes from 'prop-types';

const Bookmark = ({bookmark, i}) => {

    const {title} = bookmark;

    return (
        <div className='bg-slate-200 m-4 rounded-xl'>
            <h3 className='text-2xl'>{i+1} {title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
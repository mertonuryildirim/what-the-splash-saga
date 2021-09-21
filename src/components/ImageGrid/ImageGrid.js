import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages } from '../../redux/actions/imageActions';
import Button from '../Button/';
import Stats from '../Stats';
import './styles.css';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { images, error, loads, loadImages, imageStats } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <Stats stats={imageStats[image.id]} />
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
                <Button onClick={() => !loads && loadImages()} loading={loads}>
                    Load More
                </Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

const mapStateToProps = state => ({
    loads: state.loadReducer,
    images: state.imageReducer,
    error: state.errorReducer,
    imageStats: state.statsReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);

import { GifItem } from "../components";
import { useFechItem } from '../../Hooks/useFechItem';
import PropTypes from 'prop-types';


export const GifGrid = ({ category }) => {
    const { images , isLoading } = useFechItem(category);
    return (
        <>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((item) => {
                        return (
                            <GifItem
                                key={item.id}
                                {...item}
                            />
                        )
                    })
                }
            </div>
        </>
    );
};


GifGrid.propTypes = {
    category : PropTypes.string.isRequired,
}

import React from 'react';

import TagInfo from '../TagInfo/TagInfo';
import Button from '../Button/Button'

export default function Categories({ data }) {
    return (
        <section className="container">
            {
                data.map((category, index1) => {
                    return (
                        <div className="categories" key={`category${index1}`}>
                            <h4 className="mb-3">{category.name}</h4>
                            <div className="container-grid">
                                {
                                    category.items.length === 0 ?
                                        (<div className="row">
                                            <div className="col-auto align-items-center">
                                                There is no property at this category
                            </div>
                                        </div>)
                                        :
                                        (category.items.map((item, index2) => {
                                            return (
                                                <div key={`category-${index1}-item-${index2}`} className="item column-3 row-1">
                                                    <div className="card">
                                                        {item.isPopular &&
                                                            (<div className="tag">
                                                                <TagInfo price="Popular" desc="Choice"></TagInfo>
                                                            </div>)
                                                        }
                                                        <figure className="img-wrapper" style={{ height: '180px' }}>
                                                            <img src={item.imageUrl} alt={item.name} className="img-cover" />
                                                        </figure>
                                                        <div className="meta-wrapper">
                                                            <Button type="link" className="streched-link d-block text-gray-800" href={`/properties/${item._id}`}>
                                                                <h5>{item.name}</h5>
                                                            </Button>
                                                            <span className="text-gray-800">{item.city}, {item.country}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }))
                                }
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

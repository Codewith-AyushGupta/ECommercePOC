import React, { useEffect, useState } from 'react'

function DynamicProductVarient(props) {
    const { productDetail } = props;
    const productFilters = productDetail.data.filters;
    var [selectedFilters,setSelectedFilters] = useState({});
    const setData=(event)=>{
        var unchangedData= selectedFilters;
        unchangedData[event.target.name] = event.target.value;
        setSelectedFilters(unchangedData);
        console.log(selectedFilters)
        handelMasterdata(unchangedData);
        setFilterDataToProductDetail();
    } 
    const handelMasterdata =(unchangedData)=>{
    }
    const setFilterDataToProductDetail = () => {
        var selectedReqFilters = 0;
        var totalReqFilter =0;
        productDetail.data.filters.forEach((filter) => {
            if (filter.isRequried) {
                totalReqFilter+=1;
                if (selectedFilters[filter.name] && selectedFilters[filter.name] !== "null") {
                    selectedReqFilters += 1;
                }
            }
        });
        const updateFilters = (newSelectedFilters) => {
            productDetail.data.filters.forEach((filter) => {
                if (filter.isRequried) {
                    const wasSelected = selectedFilters[filter.name] && selectedFilters[filter.name] !== "null";
                    const isSelected = newSelectedFilters[filter.name] && newSelectedFilters[filter.name] !== "null";
    
                    if (isSelected && !wasSelected) {
                        selectedReqFilters += 1;
                    } else if (!isSelected && wasSelected) {
                        selectedReqFilters = selectedReqFilters > 0 ? selectedReqFilters - 1 : selectedReqFilters;
                    }
                }
            });
    
        };
        const newSelectedFilters = { ...selectedFilters, someFilterName: null };
        updateFilters(newSelectedFilters);
        if(selectedReqFilters === totalReqFilter){
            props.getFilterData(selectedFilters, true);
        }
        else{
            props.getFilterData(selectedFilters, false);
        }
    }
    
    
    const getFields = (data) => {
        if (data) {
            if (data.fieldType === 'text') {
                return <input onChange={setData} style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '6px' ,width: '36%'}} type="text" placeholder='enter Data'></input>
            }
            else if (data.fieldType === "picklist") {
                if (data.entries) {
                    return (
                        <select className='form-control select-size' onChange={setData} name={data.name} style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '6px' ,width: '36%'}}>
                            <option value="null">Choose an option</option>
                            {data.entries.map((entry, index) => (
                                <option key={index} value={entry}>{entry}</option>
                            ))}
                        </select>
                    )
                }
                else {
                    return null;
                }
            }
        }
    }
    useEffect(() => {
        if(productFilters){
            productFilters.map((filter,index)=>{
                setSelectedFilters(prevState => ({
                    ...prevState,
                    [filter['name']]: ''
                }));
            })
        }
    }, productFilters);
    return (
        <div className='filterDivContainer'>
            {productFilters ? productFilters.map((filter, index) => (
                <div key={index} className='formDiv'>
                    {filter.isRequried && <span style={{ color: 'red' }}>*</span>}
                    <span className='formElement'>{filter.name}: </span>
                    {getFields(filter)}
                </div>
            )) : <div></div>}
            
        </div>
    )
}

export default DynamicProductVarient

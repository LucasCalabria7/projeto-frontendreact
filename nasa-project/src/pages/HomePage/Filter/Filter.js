import {ImgFilter, FilterTitle, FilterHeader, FilterMain, InputSearch, OrderTitle, InputSelect} from './filterstyle'

import FilterIcon from '../../../assets/iconfilter.png'


export function Filter (props) {

    const onChangeName = (event) => {
        props.setSearchName(event.target.value)
    }

    const onChangeSortName = (event) => {
        props.setSortName(event.target.value)
    }

    const onChangeSortPrice = (event) => {
        props.setSortPrice(event.target.value)
    }

    return (
        <>
    <FilterHeader>
        <ImgFilter src={FilterIcon} alt="filter-icon" />
        <FilterTitle>Filter</FilterTitle>
    </FilterHeader>

    <FilterMain>
    <InputSearch placeholder="Search" value={props.searchName} onChange={onChangeName} />
    <OrderTitle>Order by:</OrderTitle>
    <InputSelect onChange={onChangeSortName} value={props.SortName} >
        <option value="">Name</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
    </InputSelect>
    <InputSelect onChange={onChangeSortPrice} value={props.SortPrice} >
        <option value="">Price</option>
        <option value="high">Highest</option>
        <option value="low">Lowest</option>
    </InputSelect>
    </FilterMain>
    </>
    )
}
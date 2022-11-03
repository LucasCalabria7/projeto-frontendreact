import {ImgFilter, FilterTitle, FilterHeader, FilterMain, InputSearch, OrderTitle, InputSelect} from './filterstyle'
import FilterIcon from './iconfilter.png'


export function Filter (props) {

    const onChangeName = (event) => {
        props.setBuscaNome(event.target.value)
    }

    const onChangeOrdemNome = (event) => {
        props.setOrdemNome(event.target.value)
    }

    const onChangeOrdemPreco = (event) => {
        props.setOrdemPreco(event.target.value)
    }

    return (
        <>
    <FilterHeader>
        <ImgFilter src={FilterIcon} alt="filter-icon" />
        <FilterTitle>Filter</FilterTitle>
    </FilterHeader>

    <FilterMain>
    <InputSearch placeholder="Search" value={props.buscaNome} onChange={onChangeName} />
    <OrderTitle>Order by:</OrderTitle>
    <InputSelect onChange={onChangeOrdemNome} value={props.ordemNome} >
        <option value="">Name</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
    </InputSelect>
    <InputSelect onChange={onChangeOrdemPreco} value={props.ordemPreco} >
        <option value="">Price</option>
        <option value="high">Highest</option>
        <option value="low">Lowest</option>
    </InputSelect>
    </FilterMain>
    </>
    )
}
# Code Style

## 1. Template

컴포넌트의 **<template~**부분은 html을 작성하고 일부 자바스크립트와 결합됩니다. 이 부분은 개발 단계 또는 빌드 단계에서 타입(형식) 체크하는 부분이 아니기 때문에, 오타 등이 있을 경우 runtime에서만 볼 수 있습니다.

따라서 **최소한의 자바스크립트만 사용** 합니다.

---

### a. 복잡한 자바스크립트 사용하지 않기

~~~javascript
/** Bad case */
/** 변수가 비어 있거나 속성이 비어있을 수 있기 때문에 computed를 사용하는 것이 좋음 */
<data-label
        :value="
            currentActivityOffer.owner.name +
            ' ' +
            currentActivityOffer.owner.surname
        "
        class="flex-1 justify-content-center"
        label="Owner"
/>
         

/** Good case*/
<data-label
        :value="currentActivityOfferOwnerNameSurname"
        class="flex-1 justify-content-center"
        label="Owner"
/>

~~~

### b. 동일한 명명 규칙 및 속성 순서 사용

~~~javascript
<my-component
    v-if="isVibile"
    v-model="myModel"
    :my-awesome-prop="myProp"
    @my-event="onMyEvent"
/>
~~~

​    

## 2. Script

### a. Function 내에 비지니스 로직 작성하지 않기

component에 있는 function은 컴포넌트 state나 특정 함수를 호출하는 코드만 포함하도록 해서, 컴포넌트 및 로직 기능에 대한 테스트를 쉽게 작성할 수 있도록 합니다.

~~~javascript

/** Bad case */
get doseCalculationMultiplier() {
    return (product: OrderDrugProductModel) => {
        if (
            !product.doseIntegrityType ||
            product.doseIntegrityType != EnumDoseIntegrityType.Calculated
        )
            return 0;
        if (!product.doseCalculationType) return 0;
.
.
.  
     };
}

/** Good case*/

get doseCalculationMultiplier() {
    return (product: OrderDrugProductModel) =>
        OrderDrugHelper.doseCalculationMultiplier(product,    this.model);
}
~~~

### b. Computed , Watcher

두 개 이상의 prop이나 데이터의 변화를 watch하여 특정한 동작을 수행하려면, 두 개의 watch function을 만드는 대신, 하나의 computed property로 묶어서 이것을 바라보도록 합니다.

~~~javascript
/** Bad case */
name:string = '';
secondName:string  ='';

@Watch("name")
onNameChanged(){
    ...
}
@Watch("secondName")
onSecondNameChanged(){
    ...
}
    

/** Good case*/
name:string = '';
secondName:string  ='';
  
get fullName(){
    return `${this.name} ${this.secondName}`
}
  
@Watch("fullName")
onFullNameChanged(){
    ...
}
~~~

**@ 또한 무한 루프나 성능 이슈가 발생할 수 있으므로 computed 에서 state를 변경하는 코드를 작성하지 않도록 합니다.**

   

### c. 비지니스 로직


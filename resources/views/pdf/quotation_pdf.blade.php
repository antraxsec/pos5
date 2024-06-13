<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Quotation _{{$quote['Ref']}}</title>
      <link rel="stylesheet" href="{{asset('/css/pdf_style.css')}}" media="all" />
   </head>

   <body>
      <header class="clearfix">
         <div id="logo">
         <!-- <img src="{{asset('/images/'.$setting['logo'])}}"> -->
         </div>
         <div id="company">
            <div><strong> Fecha: </strong>{{$quote['date']}}</div>
            <div><strong> Número: </strong> {{$quote['Ref']}}</div>
            <div><strong> Estado: </strong> {{$quote['statut']}}</div>
         </div>
         <div id="Title-heading">
            Cotización  : {{$quote['Ref']}}
         </div>
         </div>
      </header>
      <main>
         <div id="details" class="clearfix">
            <div id="invoice">
               <table  class="table-sm">
                  <thead>
                     <tr>
                        <th class="desc">Sucursal</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>
                           <div id="comp">{{$setting['CompanyName']}}</div>
                           <div><strong>Teléfono :</strong>  {{$setting['CompanyPhone']}}</div>
                           <div><strong>Correo :</strong>  {{$setting['email']}}</div>
                           <div><strong>Dirección :</strong>  {{$setting['CompanyAdress']}}</div>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <div id="client">
               <table class="table-sm">
                  <thead>
                     <tr>
                        <th class="desc">Cliente</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>
                           <div><strong>Nombre :</strong> {{$quote['client_name']}}</div>
                           <div><strong>Telefono :</strong> {{$quote['client_phone']}}</div>
                           <div><strong>Email :</strong>  {{$quote['client_email']}}</div>
                           <div><strong>Dirección :</strong>   {{$quote['client_adr']}}</div>
                           @if($quote['client_tax'])<div><strong>CI :</strong>  {{$quote['client_tax']}}</div>@endif
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
            
         </div>
         <div id="details_inv">
            <table class="table-sm">
               <thead>
                  <tr>
                     <th>DETALLE</th>
                     <th>PRECIO/U</th>
                     <th>CANTIDAD</th>
                     <th>DESC.</th>
                     <th>TOTAL</th>
                  </tr>
               </thead>
               <tbody>
                  @foreach ($details as $detail)
                  <tr>
                     <td>
                        <span>{{$detail['code']}} ({{$detail['name']}})</span>
                           @if($detail['is_imei'] && $detail['imei_number'] !==null)
                              <p>IMEI/SN : {{$detail['imei_number']}}</p>
                           @endif
                     </td>
                     <td>{{$detail['price']}} </td>
                     <td>{{$detail['quantity']}}/{{$detail['unitSale']}}</td>
                     <td>{{$detail['DiscountNet']}} </td>
                     <td>{{$detail['total']}} </td>
                  </tr>
                  @endforeach
               </tbody>
            </table>
         </div>
         <div id="total">
            <table>
               <tr>
                  <td>Desc.</td>
                  <td>{{$quote['discount']}} </td>
               </tr>
               <tr>
                  <td>Total</td>
                  <td>{{$symbol}} {{$quote['GrandTotal']}} </td>
               </tr>
            </table>
         </div>
         <div id="signature">
            @if($setting['is_invoice_footer'] && $setting['invoice_footer'] !==null)
               <p>{{$setting['invoice_footer']}}</p>
            @endif
         </div>
      </main>
   </body>
</html>

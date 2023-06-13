<?php
namespace Magento\Framework\Url\RouteParamsResolver;

/**
 * Interceptor class for @see \Magento\Framework\Url\RouteParamsResolver
 */
class Interceptor extends \Magento\Framework\Url\RouteParamsResolver implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Framework\App\RequestInterface $request, \Magento\Framework\Url\QueryParamsResolverInterface $queryParamsResolver, array $data = [])
    {
        $this->___init();
        parent::__construct($request, $queryParamsResolver, $data);
    }

    /**
     * {@inheritdoc}
     */
    public function setRouteParams(array $data, $unsetOldParams = true)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'setRouteParams');
        return $pluginInfo ? $this->___callPlugins('setRouteParams', func_get_args(), $pluginInfo) : parent::setRouteParams($data, $unsetOldParams);
    }
}
